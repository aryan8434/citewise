// A plain GET form: works without JavaScript and gives every audit a shareable URL.
export default function AuditForm({ defaultValue, id }: { defaultValue?: string; id?: string }) {
  return (
    <form className="audit-form" action="/audit" method="get" id={id}>
      <label htmlFor={id ? `${id}-url` : "audit-url"} className="sr-only">
        Your website
      </label>
      <input
        id={id ? `${id}-url` : "audit-url"}
        name="url"
        type="text"
        inputMode="url"
        autoComplete="url"
        placeholder="yourcompany.com"
        defaultValue={defaultValue}
        required
      />
      <button type="submit">Run free audit</button>
    </form>
  );
}
