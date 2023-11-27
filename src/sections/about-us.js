/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import StatisticImage from "assets/statistic-image.png";
import WorkImage from "assets/work-image.png";
import RevenewImage from "assets/revenew-image.png";
import TextFeature from "components/text-feature";
import Image from "components/image";
import FeatureCardColumn from "components/feature-card-column";
import Group from "assets/key-feature/Group-Photo.png";
import Group2 from "assets/key-feature/Group-Photo2.png";
import Group3 from "assets/key-feature/Group-Photo3.png";

const data = [
  {
    id: 1,
    imgSrc: Group,
    altText: "Vector",
    title: "Mobile App",
    text: "A complete variety of iOS and Android development services are offered by Tera Sync Solutions.",
  },
  {
    id: 2,
    imgSrc: Group2,
    altText: "Monitoring",
    title: "E-commerce Websites",
    text: "Our ecommerce services help you efficiently manage the whole client experience",
  },
  {
    id: 3,
    imgSrc: Group3,
    altText: "Digital Marketing",
    title: "Digital Marketing",
    text: "Tera Sync Solutions Internet Marketing is a dynamic, versatile and full-service digital marketing agency",
  },
];
const aboutdata = {
  subTitle: "PAYMENT SECURITY",
  title: "Solutions for your large enterprise",
  description:
    "Enterprise application software (EAS), is software used to fulfill the requirements of an association instead of individual clients. Such associations include organizations, schools, premium-based client gatherings, clubs, good cause, and governments.",
  btnName: "Learn More",
  btnURL: "#",
};

export default function AboutUs() {
  return (
    <section id="aboutus" sx={{ variant: "section.aboutus" }}>
      <Container>
        <SectionHeader
          slogan="About Us"
          title="Innovating digital possibilities through code."
        />
        <Container sx={styles.containerBox}>
          <Box sx={styles.contentBoxLeft}>
            <TextFeature
              subTitle={aboutdata.subTitle}
              title={aboutdata.title}
              description={aboutdata.description}
              btnName={aboutdata.btnName}
              btnURL={aboutdata.btnURL}
            />
          </Box>
          <Box sx={styles.thumbnail}>
            <Image src={StatisticImage} alt={aboutdata.title} />
          </Box>
        </Container>
        <Container
          sx={styles.containerBox}
          style={{
            marginTop: "100px",
          }}
        >
          <Box sx={styles.thumbnail}>
            <Image src={RevenewImage} alt={aboutdata.title} />
          </Box>
          <Box sx={styles.contentBox}>
            <TextFeature
              subTitle={aboutdata.subTitle}
              title="We’re a mission driven company"
              description="Tera sync solutions assist brands and companies in boosting visibility, engagement, and revenue with anything from web and mobile app design and development to online marketing campaigns."
              btnName={aboutdata.btnName}
              btnURL={aboutdata.btnURL}
            />
          </Box>
        </Container>
        <Container sx={styles.containerBox} style={{ marginTop: "90px" }}>
          <Box sx={styles.contentBoxLeft}>
            <TextFeature
              subTitle={aboutdata.subTitle}
              title="How we work"
              description="Low cash flow and a lack of money are major causes of hardship for many startups, business owners, and enterprises. As part of TKTURNERS’ aim to help you realise your vision, we provide flexible low monthly payment plans to reduce the pressure on your business’ ability to develop and work with you to assure the production of a high-quality product through deliberate and economical planning."
              btnName={aboutdata.btnName}
              btnURL={aboutdata.btnURL}
            />
          </Box>
          <Box sx={styles.thumbnail}>
            <Image src={WorkImage} alt={aboutdata.title} />
          </Box>
        </Container>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    width: ["100%", 420, 480, 380, 500, 570],
    mx: "auto",
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    pt: [0, null, null, 4, "50px", null, 4, "80px"],
    pl: [0, null, null, 40, "90px"],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
  contentBoxLeft: {
    width: ["100%", 420, 480, 380, 500, 570],
    mx: "auto",
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    pt: [0, null, null, 4, "50px", null, 4, "80px"],
    pl: [0, null, null, 40, "0px"],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
  containerBox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  thumbnail: {
    mb: -2,
    ml: [-4, "-40px", null, null, 0],
    order: [2, null, null, 0],
    pr: [6, null, 7, 0],
  },
  grid: {
    pt: "40px",
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
