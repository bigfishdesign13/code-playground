import ContentWrapper from "@/components/ContentWrapper";
import Heading from "@/components/Heading";
import CustomImage from "@/components/CustomImage";

export default function Home() {
  return (
    <ContentWrapper
      pageTitle="Examples using Next.js Image component"
      subHeading="A custom image component that utilizes the Next.js Image component at its core."
    >
      <div
        style={{
          display: "grid",
          gap: "2rem",
          position: "relative",
        }}
      >
        {/* Aspect ratio examples */}
        <Heading size="heading4">Aspect ratio</Heading>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          <div>
            <Heading level="h3" size="heading6">
              1:1 (100%)
            </Heading>
            <CustomImage
              alt="My image"
              aspectRatio="square"
              src="/westminster-bridge-and-big-ben-london-uk.jpg"
            />
          </div>
          <div>
            <Heading level="h3" size="heading6">
              16:9 (56.25%)
            </Heading>
            <CustomImage
              alt="My image"
              aspectRatio="sixteenByNine"
              src="/westminster-bridge-and-big-ben-london-uk.jpg"
            />
          </div>
          <div>
            <Heading level="h3" size="heading6">
              4:3 (75%)
            </Heading>
            <CustomImage
              alt="My image"
              aspectRatio="fourByThree"
              src="/westminster-bridge-and-big-ben-london-uk.jpg"
            />
          </div>
          <div>
            <Heading level="h3" size="heading6">
              1:2 (200%)
            </Heading>
            <CustomImage
              alt="My image"
              aspectRatio="oneByTwo"
              src="/westminster-bridge-and-big-ben-london-uk.jpg"
            />
          </div>
        </div>

        {/* Contained example */}
        <Heading size="heading4">Contained</Heading>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          <CustomImage
            alt="My image"
            aspectRatio="square"
            src="/westminster-bridge-and-big-ben-london-uk.jpg"
          />
          <CustomImage
            alt="My image"
            aspectRatio="square"
            src="/big-ben-houses-of-parliament.jpg"
          />
          <CustomImage
            alt="My image"
            aspectRatio="square"
            src="/big-ben-parliament-london-england-uk.jpg"
          />
          <CustomImage
            alt="My image"
            aspectRatio="square"
            src="/uk-london-big-ben-houses-of-parliament.jpg"
          />
        </div>

        {/* Cropped examples */}
        <Heading size="heading4">Cropped</Heading>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          <CustomImage
            alt="My image"
            aspectRatio="square"
            isCropped
            src="/westminster-bridge-and-big-ben-london-uk.jpg"
          />
          <CustomImage
            alt="My image"
            aspectRatio="square"
            isCropped
            src="/big-ben-houses-of-parliament.jpg"
          />
          <CustomImage
            alt="My image"
            aspectRatio="square"
            isCropped
            src="/big-ben-parliament-london-england-uk.jpg"
          />
          <CustomImage
            alt="My image"
            aspectRatio="square"
            isCropped
            src="/uk-london-big-ben-houses-of-parliament.jpg"
          />
        </div>

        {/* Size examples */}
        <Heading size="heading4">Size</Heading>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          <div>
            <Heading level="h3" size="heading6">
              96px
            </Heading>
            <CustomImage
              alt="My image"
              aspectRatio="square"
              isCropped
              size="sm"
              src="/westminster-bridge-and-big-ben-london-uk.jpg"
            />
          </div>
          <div>
            <Heading level="h3" size="heading6">
              128px
            </Heading>
            <CustomImage
              alt="My image"
              aspectRatio="square"
              isCropped
              size="md"
              src="/westminster-bridge-and-big-ben-london-uk.jpg"
            />
          </div>
          <div>
            <Heading level="h3" size="heading6">
              160px
            </Heading>
            <CustomImage
              alt="My image"
              aspectRatio="square"
              isCropped
              size="lg"
              src="/westminster-bridge-and-big-ben-london-uk.jpg"
            />
          </div>
          <div>
            <Heading level="h3" size="heading6">
              256px
            </Heading>
            <CustomImage
              alt="My image"
              aspectRatio="square"
              isCropped
              size="xl"
              src="/westminster-bridge-and-big-ben-london-uk.jpg"
            />
          </div>
        </div>

        <Heading size="heading4">Full-width examples</Heading>
        <CustomImage
          alt="My image"
          aspectRatio="fourByOne"
          isCropped
          src="/big-ben-houses-of-parliament.jpg"
        />

        <CustomImage
          alt="My image"
          aspectRatio="twoByOne"
          src="/uk-london-big-ben-houses-of-parliament.jpg"
        />

        <CustomImage
          alt="My image"
          aspectRatio="sixteenByNine"
          isCropped
          src="/midnight-light-III-london-big-ben-westminster.jpg"
        />
      </div>
    </ContentWrapper>
  );
}
