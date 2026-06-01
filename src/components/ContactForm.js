"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { enquiryPaths, projectStages, supportNeeded } from "@/lib/standards";

const FIELD =
  "w-full rounded-md border border-mute-strong bg-paper px-4 py-3 text-[15px] text-graphite placeholder:text-graphite-faint transition-colors focus:border-signal-ink focus:outline-none focus:ring-2 focus:ring-signal/30";
const FIELD_ERR = "border-[#b3402a] focus:border-[#b3402a] focus:ring-[#b3402a]/25";
const LABEL = "mb-2 block font-mono text-xs uppercase tracking-widest text-graphite-faint";

const PROJECT_TYPES = [
  "Commercial / office", "Hotel / hospitality", "Healthcare", "Mixed-use",
  "Industrial", "Residential tower", "Retail", "Government / institutional", "Other",
];

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "d794af6d-2621-4d79-b4e1-eb5897df58f6";

const initial = {
  enquiry: enquiryPaths[0].id,
  name: "", company: "", email: "", phone: "", location: "",
  projectType: PROJECT_TYPES[0], projectStage: projectStages[0], support: supportNeeded[0],
  summary: "", tenderDate: "", platform: "", consent: false, botcheck: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Prepopulate enquiry path from ?intent= without requiring a Suspense boundary.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const intent = params.get("intent");
    if (intent === "documents") setForm((f) => ({ ...f, enquiry: "new" }));
    const map = { new: "new", upgrade: "upgrade", commissioning: "commissioning", review: "review" };
    if (intent && map[intent]) setForm((f) => ({ ...f, enquiry: map[intent] }));
  }, []);

  const update = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!form.email.trim()) er.email = "Please enter a work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Please enter a valid email address.";
    if (!form.summary.trim()) er.summary = "Please add a short project summary.";
    if (!form.consent) er.consent = "Please confirm you are happy for us to handle your enquiry.";
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.botcheck) return; // honeypot tripped
    const er = validate();
    if (Object.keys(er).length) {
      setErrors(er);
      setStatus("error");
      const first = document.getElementById(`field-${Object.keys(er)[0]}`);
      first?.focus();
      return;
    }
    setStatus("sending");
    const pathLabel = enquiryPaths.find((p) => p.id === form.enquiry)?.label || form.enquiry;
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry — ${pathLabel}`,
          from_name: "servomatrix website",
          enquiry_path: pathLabel,
          name: form.name, company: form.company, email: form.email, phone: form.phone,
          location: form.location, project_type: form.projectType, project_stage: form.projectStage,
          support_required: form.support, summary: form.summary,
          tender_date: form.tenderDate, existing_platform: form.platform,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error("bad response");
      setStatus("sent");
      setForm(initial);
    } catch {
      setStatus("error");
      setErrors({ submit: "The enquiry could not be sent. Please email engineering@servomatrix.com directly." });
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-mute bg-paper p-8 text-center" role="status">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal-soft text-signal-ink">✓</div>
        <h3 className="mt-5 font-display text-xl font-semibold text-graphite">Enquiry received</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-graphite-dim">
          We will review the enquiry and identify the appropriate next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      {/* Enquiry path selector */}
      <fieldset>
        <legend className={LABEL}>What is this about?</legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {enquiryPaths.map((p) => {
            const active = form.enquiry === p.id;
            return (
              <label
                key={p.id}
                className={`flex cursor-pointer flex-col rounded-lg border p-4 transition-colors ${
                  active ? "border-signal-ink bg-signal-soft" : "border-mute bg-paper hover:border-mute-strong"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <input type="radio" name="enquiry" value={p.id} checked={active} onChange={update("enquiry")} className="sr-only" />
                  <span className={`flex h-4 w-4 items-center justify-center rounded-full border ${active ? "border-signal-ink" : "border-mute-strong"}`}>
                    {active && <span className="h-2 w-2 rounded-full bg-signal-ink" />}
                  </span>
                  <span className="text-sm font-medium text-graphite">{p.label}</span>
                </span>
                <span className="mt-1.5 pl-[26px] text-xs leading-relaxed text-graphite-dim">{p.blurb}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="name" label="Name" value={form.name} onChange={update("name")} error={errors.name} required />
        <Input id="company" label="Company" value={form.company} onChange={update("company")} />
        <Input id="email" label="Work email" type="email" value={form.email} onChange={update("email")} error={errors.email} required />
        <Input id="phone" label="Phone / WhatsApp" value={form.phone} onChange={update("phone")} />
        <Input id="location" label="Country / project location" value={form.location} onChange={update("location")} className="sm:col-span-2" />
        <Select id="projectType" label="Project type" value={form.projectType} onChange={update("projectType")} options={PROJECT_TYPES} />
        <Select id="projectStage" label="Project stage" value={form.projectStage} onChange={update("projectStage")} options={projectStages} />
        <Select id="support" label="Required support" value={form.support} onChange={update("support")} options={supportNeeded} className="sm:col-span-2" />
      </div>

      <Textarea id="summary" label="Project summary" value={form.summary} onChange={update("summary")} error={errors.summary} required
        placeholder="Building type, scope, the controls problem to resolve. Have drawings, specifications or a points schedule? Mention them here and we will arrange the appropriate document submission method." />

      <details className="rounded-lg border border-mute bg-canvas-2 px-4 py-3">
        <summary className="cursor-pointer text-sm font-medium text-graphite-dim">Optional details</summary>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <Input id="tenderDate" label="Expected tender / delivery date" value={form.tenderDate} onChange={update("tenderDate")} />
          <Input id="platform" label="Existing BMS platform (if any)" value={form.platform} onChange={update("platform")} />
        </div>
      </details>

      {/* Honeypot */}
      <input
        type="text" name="botcheck" tabIndex={-1} autoComplete="off"
        value={form.botcheck} onChange={update("botcheck")}
        className="absolute left-[-9999px] h-0 w-0 opacity-0" aria-hidden="true"
      />

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 text-sm text-graphite-dim">
          <input id="field-consent" type="checkbox" checked={form.consent} onChange={update("consent")}
            aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "err-consent" : undefined}
            className="mt-1 h-4 w-4 rounded border-mute-strong accent-[#A86A1E]" />
          <span>
            I am happy for servomatrix to use the details above to respond to this enquiry, as described in the{" "}
            <Link href="/privacy" className="text-signal-ink underline underline-offset-2">privacy notice</Link>.
          </span>
        </label>
        {errors.consent && <p id="err-consent" className="mt-1.5 pl-7 text-xs text-[#b3402a]">{errors.consent}</p>}
      </div>

      {errors.submit && <p className="text-sm text-[#b3402a]" role="alert">{errors.submit}</p>}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-[1px] hover:bg-[#f6b658] disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <span aria-hidden="true">&rarr;</span>
        </button>
        <p className="text-xs text-graphite-faint">We will review the enquiry and identify the appropriate next step.</p>
      </div>
    </form>
  );
}

function Input({ id, label, error, required, className = "", ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={`field-${id}`} className={LABEL}>{label}{required && <span className="text-signal-ink"> *</span>}</label>
      <input id={`field-${id}`} className={`${FIELD} ${error ? FIELD_ERR : ""}`}
        aria-invalid={!!error} aria-describedby={error ? `err-${id}` : undefined} {...rest} />
      {error && <p id={`err-${id}`} className="mt-1.5 text-xs text-[#b3402a]">{error}</p>}
    </div>
  );
}

function Select({ id, label, options, className = "", ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={`field-${id}`} className={LABEL}>{label}</label>
      <select id={`field-${id}`} className={FIELD} {...rest}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Textarea({ id, label, error, required, className = "", ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={`field-${id}`} className={LABEL}>{label}{required && <span className="text-signal-ink"> *</span>}</label>
      <textarea id={`field-${id}`} rows={5} className={`${FIELD} resize-y ${error ? FIELD_ERR : ""}`}
        aria-invalid={!!error} aria-describedby={error ? `err-${id}` : undefined} {...rest} />
      {error && <p id={`err-${id}`} className="mt-1.5 text-xs text-[#b3402a]">{error}</p>}
    </div>
  );
}
