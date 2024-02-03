type EmphasisProps = {
  heading: string;
  content?: string | string[];
  linkText?: string;
  linkHref?: string;
};

export default function Emphasis(props: EmphasisProps) {
  return (
    <aside className={`mb-6 mt-0 border-2 border-dashed p-3 pb-8`}>
      <h3 className="mt-0 pt-2 text-2xl font-bold text-skin-accent">
        {props.heading}
      </h3>
      {props.content &&
        (Array.isArray(props.content) ? (
          props.content.map((p, i) => (
            <p
              className={i === props?.content?.length - 1 ? "mb-0" : ""}
              key={i}
            >
              {p}
            </p>
          ))
        ) : (
          <p className="mb-0">{props.content}</p>
        ))}

      {props.linkText && props.linkHref && (
        <a
          href={props.linkHref}
          className="text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {props.linkText}
        </a>
      )}
    </aside>
  );
}
