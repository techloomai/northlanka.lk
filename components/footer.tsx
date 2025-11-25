"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} North Lanka Tours & Travels. All rights reserved.
            </p>
            <p className="mt-1 text-xs font-medium text-secondary">
              Explore, Experience, Enjoy.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Sri Lanka Tourism Development Authority – registration in progress.
          </p>
        </div>
      </div>
    </footer>
  );
}

