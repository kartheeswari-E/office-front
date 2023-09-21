import React from "react";
import Top from "../Top/Top";
import { useEffect } from "react";
function Copy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="user-width">
        <Top />
        <section id="faq" className="faq" style={{ background: "white" }}>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Copyright Infringement</h2>
            </div>

            <div className="resps">
              Any claims of copyright infringement should be addressed to the
              Editor at{" "}
              <em>
                <a
                  style={{ color: "rgb(14,76,137)" }}
                  href="mailto:editor@ijresonline.com"
                >
                  editor@ijresonline.com
                </a>
              </em>{" "}
              bearing the subject line "Copyright Infringement". The claim must
              be sufficed by documented evidence supporting the same version as
              being published or copyrighted or patented by the aggrieved party
              before the date of publication of the concerned SSRG article. On
              receipt of the claim, the SSRG Board, if found deemed, shall
              inform the SSRG author to provide an explanation; the discussion
              of which shall be transparent to both parties.
            </div>

            <div className="resps" style={{ marginTop: "30px" }}>
              The SSRG Board reserves the sole rights to decide the validity of
              any such claims. After deliberation, if the claim is found
              justified, the concerned manuscript will be removed from all SSRG
              archives and servers. Any subsequent print copies of the concerned
              issue will not contain the article. In case, the changes required
              are minimal such as inclusion of references, the authors will be
              intimated to do the required amendments according to the SSRG
              article correction policies. The alternative version shall undergo
              peer-review as any other general submission and shall be published
              in the same issue (number) of the concerned volume. Any claims on
              copyright will be addressed with the highest priority. A revert
              mail will be dispatched within 3 working days provided the claim
              is supported with documented evidence.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Copy;
