import "../styles/components/experience.sass";

export const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">Work experience</h2>
      <div className="border">
        <div className="experience-entry">
          <div className="experience-details">
            <p className="experience-info">
              Wits Innovation Lab, Mohali | Software Developer Internship
            </p>
            <p className="experience-date">Oct’23 - Current</p>{" "}
          </div>
          <ul className="experience-list">
            <li className="experience-point">
              Developed a blogging website where users can create and read blogs
              using GraphQL API. Integrated Cloudinary for image uploading and
              Tip-tap editor for blog creation.
            </li>
            <li className="experience-point">
              Developed a delivery application leveraging Firebase
              authentication. Users have the capability to log in using their
              credentials to create orders, while the admin has access to view
              all user details.
            </li>
            <li className="experience-point">
              Integrated a payment gateway enabling users to conduct test
              payments for order confirmation.
            </li>
            <li className="experience-point">
              Resolved bugs specific to Safari on client projects.
            </li>
          </ul>
        </div>
        <div className="experience-entry">
          <div className="experience-details">
            <p className="experience-info">
              Tyke Technologies Private Limited, Gurgaon | Frontend Developer
              Internship
            </p>
            <p className="experience-date"> Mar’23 - Aug ‘ 23</p>{" "}
          </div>
          <ul className="experience-list">
            <li className="experience-point">
              {" "}
              Developed SEO-friendly webpages using ReactJS, RemixJS, and
              Material UI{" "}
            </li>{" "}
            <li className="experience-point">
              {" "}
              Integrated Strapi CMS API using the Remix framework .
            </li>
            <li className="experience-point">
              {" "}
              Constructed diverse UI components on Storybook to maintain a
              cohesive design system. .{" "}
            </li>{" "}
            <li className="experience-point">
              {" "}
              Implemented Formik library along with Yup for React form
              validations.{" "}
            </li>
            <li className="experience-point">
              Proficiently utilised Git and Bitbucket for efficient code
              management and version control.
            </li>
          </ul>
        </div>
        <div className="experience-entry">
          <div className="experience-details">
            <p className="experience-info">
              Firstock Private Limited, Bangalore | Frontend Developer
              Internship
            </p>
            <p className="experience-date">April’22 - Sept’22</p>{" "}
          </div>
          <ul className="experience-list">
            <li className="experience-point">
              {" "}
              Developed page layouts , custom navigation with the help of
              material-ui components and font-awesome styles .
            </li>
            <li className="experience-point">
              Handled end-to-end testing using Cypress.
            </li>{" "}
            <li className="experience-point">
              Refactored existingweb pages responsiveness & UI/UX .
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
