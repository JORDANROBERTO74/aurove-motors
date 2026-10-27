export default function BrandMark({
  variant = "full",
  className,
}: Readonly<{
  variant?: "full" | "symbol";
  className?: string;
}>) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.55em",
        lineHeight: 1,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ flex: "none" }}
      >
        <path
          d="M3.5 20.5 12 3.5l8.5 17"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        />
        <path
          d="M7.6 14.6h8.8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        />
        <path d="M12 3.5v5.4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      {variant === "full" && (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.0625rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Aurove
        </span>
      )}
    </span>
  );
}
