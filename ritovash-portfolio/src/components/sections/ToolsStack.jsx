import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";
import tools from "../../data/tools";

export default function ToolsStack() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Tool Stack"
        title="Platforms used in real work"
        description="A practical stack for paid media, reporting, creative coordination, and local growth execution."
      />

      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>
    </section>
  );
}
