import { Container, DarkSection, Button, CTAGroup } from "@/components/ui";

export default function NotFound() {
  return (
    <DarkSection className="flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-vignette opacity-40" aria-hidden="true" />
      <Container className="relative text-center">
        <span className="font-mono text-sm uppercase tracking-[0.18em] text-signal">Error 404</span>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tightest sm:text-5xl">This point is not mapped.</h1>
        <p className="mx-auto mt-5 max-w-md text-fg-dim">The page you are looking for does not exist or has moved. Return to the main system overview.</p>
        <CTAGroup className="mt-9 justify-center">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">Discuss a project</Button>
        </CTAGroup>
      </Container>
    </DarkSection>
  );
}
