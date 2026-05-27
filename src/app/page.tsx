import {
  Heading,
  Text,
  Button,
  Column,
  Row,
  Schema,
  Meta,
  Media,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="xl" fillWidth horizontal="center" paddingY="12" paddingX="8">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Row
        fillWidth
        vertical="stretch"
        gap="0"
        style={{
          minHeight: "min(72vh, 560px)",
          alignItems: "stretch",
        }}
        s={{
          direction: "column",
          minHeight: "auto",
        }}
      >
        <Column
          flex={1}
          fillWidth
          minWidth="0"
          horizontal="center"
          vertical="center"
          padding="24"
          style={{ flex: "1 1 50%" }}
          s={{ flex: "1 1 auto", padding: "16" }}
        >
          <Row
            radius="full"
            overflow="hidden"
            border="neutral-alpha-medium"
            style={{
              width: "min(72vmin, 20rem)",
              height: "min(72vmin, 20rem)",
              maxWidth: "100%",
            }}
          >
            <Media
              fillWidth
              fillHeight
              radius="full"
              aspectRatio="1"
              alt={`${person.name} — headshot`}
              src={person.avatar}
              sizes="(max-width: 768px) 80vw, 320px"
            />
          </Row>
        </Column>

        <Column
          flex={1}
          fillWidth
          minWidth="0"
          horizontal="start"
          vertical="center"
          gap="24"
          padding="24"
          style={{ flex: "1 1 50%" }}
          s={{
            flex: "1 1 auto",
            horizontal: "center",
            align: "center",
            padding: "16",
          }}
        >
          <Heading wrap="balance" variant="display-strong-xl" align="left">
            {home.headline}
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="body-default-l"
            align="left"
          >
            {home.subline}
          </Text>
          <Row horizontal="start" s={{ horizontal: "center" }}>
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              {about.title}
            </Button>
          </Row>
        </Column>
      </Row>
    </Column>
  );
}
