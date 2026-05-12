import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, hobbies, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: hobbies.title,
    description: hobbies.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(hobbies.title)}`,
    path: hobbies.path,
  });
}

export default function HobbiesPage() {
  return (
    <Column
      maxWidth="m"
      paddingTop="24"
      fillWidth
      horizontal="center"
      vertical="center"
      style={{ minHeight: "min(60vh, 520px)" }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={hobbies.path}
        title={hobbies.title}
        description={hobbies.description}
        image={`/api/og/generate?title=${encodeURIComponent(hobbies.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading variant="display-strong-xl" align="center">
        Coming soon
      </Heading>
    </Column>
  );
}
