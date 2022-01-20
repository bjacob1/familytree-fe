import React from "react";

function MapSection() {
  return (
    <div className="map-section">
      <section className="featured footer map">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="recent-posts push-bottom">
                <h2>
                  <strong>Questions</strong> That
                  <strong>Were</strong> Asked
                </h2>
                <div className="row">
                  <div
                    className="owl-carousel"
                    data-plugin-options='{"items": 1, "autoHeight": true}'
                  >
                    <div>
                      <div>
                        <article>
                          <p>
                            <b>Q:</b> How long did it take to create the
                            website?
                            <br />
                            <b>A:</b> It took around 3-4 months to complete the
                            family tree website.
                          </p>
                        </article>
                      </div>
                    </div>
                    <div>
                      <div>
                        <article>
                          <p>
                            <b>Q:</b> How long did it take to create the
                            website?
                            <br />
                            <b>A:</b> It took around 3-4 months to complete the
                            family tree website.
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2>
                <strong>Message</strong> from
                <strong>the</strong> Developer
              </h2>
              <div className="row">
                <div
                  className="owl-carousel push-bottom"
                  data-plugin-options='{"items": 1, "autoHeight": true}'
                >
                  <div>
                    <div className="col-md-12">
                      <blockquote className="testimonial">
                        <p>Hello and welcome to Our Family Tree Website!</p>
                      </blockquote>
                      <div className="testimonial-arrow-down" />
                      <div className="testimonial-author">
                        <div className="img-thumbnail img-thumbnail-small">
                          <img
                            src="/images/kuzhiamplavil/brian_1.jpg"
                            alt="Brian Jacob"
                          />
                        </div>
                        <p>
                          <a href="index.jsp?id=110" style={{ color: "blue" }}>
                            <b>Brian Jacob</b>
                          </a>
                          <span>Developer- Family Tree Website</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="col-md-12">
                      <blockquote className="testimonial">
                        <p>
                          If you need help with the website, you can go to the
                          help page to figure out how to get the most out of
                          this family tree. You can also see questions that have
                          been asked by going to the bottom of the page (right
                          next to this). Want to ask your own questions? Go to
                          the{" "}
                          <a href="contact.jsp" style={{ color: "aqua" }}>
                            contact page
                          </a>{" "}
                          or just{" "}
                          <a
                            href="mailto:brian.jacob@outlook.com?subject=Family Tree Comment"
                            style={{ color: "aqua" }}
                          >
                            click here
                          </a>
                          . We hope that you will find this family tree website
                          useful, informative, and easy to use and that you will
                          learn more about the family history and members.
                        </p>
                      </blockquote>
                      <div className="testimonial-arrow-down" />
                      <div className="testimonial-author">
                        <div className="img-thumbnail img-thumbnail-small">
                          <img
                            src="/images/kuzhiamplavil/brian_1.jpg"
                            alt="<b>Brian Jacob</b>"
                          />
                        </div>
                        <p>
                          <a href="index.jsp?id=110" style={{ color: "blue" }}>
                            <b>Brian Jacob</b>
                          </a>
                          <span>Developer- Family Tree Website</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MapSection;
