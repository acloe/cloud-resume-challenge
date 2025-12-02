export default function ResumePage() {
  return (
    <>
     <section className="header">
      <h1>Alan Cloe</h1>
      <p>
        San Jose, CA 95124 &bull;
        <a href="mailto:acloe1@gmail.com">acloe1@gmail.com</a> &bull;
        <a href="https://github.com/acloe">github.com/acloe</a> &bull;
        <a href="https://www.linkedin.com/in/alan-cloe/">linkedin.com/in/alan-cloe</a>
      </p>
    </section>

      <section className="education">
        <h2>Education</h2>
        <div className="items">
          <div className="item">
            <div className="item_heading">
              <div className="info">
                <h3>University of California Santa Cruz</h3>
                <p>Bachelor of Arts in Mathematics</p>
              </div>
              <div className="details">
                <div className="location">Santa Cruz, CA.</div>
                <div className="duration">1996</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="items">
          <div className="item">
            <div className="item_heading">
              <div className="info">
                <h3>Apple Inc. &mdash; MCAD IT System Administrator</h3>
                <p>
                  Led large-scale IT infrastructure projects exceeding $1M budgets in
                  support of Apple’s Hardware Engineering division, spanning 9 global
                  data centers and 2,000+ backend servers.
                </p>
              </div>
              <div className="details">
                <div className="location">Cupertino, CA.</div>
                <div className="duration">October 2011- July 2024</div>
              </div>
            </div>
            <div className="bullets">
              <ul>
                <li>
                  Automated, maintained, and scaled backend infrastructure including
                  virtualization, patching pipelines, and distributed systems
                  supporting 2,000+ servers, improving reliability and reducing manual
                  work.
                </li>
                <li>
                  Oversaw VMware-based virtualization platform supporting 5,000 CAD
                  engineers; migrated 5,000 physical systems to virtual desktops.
                </li>
                <li>
                  Influenced the decision to shift virtualization from Citrix
                  XenDesktop to VMWare Horizon and led the design and testing of the
                  new virtualization system in collaboration with vendors such as
                  VMware and Nvidia.
                </li>
                <li>
                  Partnered with Siemens TeamCenter team to architect backend
                  infrastructure and server resource planning.
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <div className="item_heading">
              <div className="info">
                <h3>Avaya, Software Test Engineer</h3>
                <p>
                  Provided testing and QC support for network devices and protocols at
                  a 10,000-employee tech company providing enterprise communication
                  solutions following the acquisition of Nortel's networking division.
                </p>
              </div>
              <div className="details">
                <div className="location">Santa Clara, CA.</div>
                <div className="duration">December 2009 - October 2011</div>
              </div>
            </div>
            <div className="bullets">
              <ul>
                <li>
                  Developed test plans for Layer 2 to 7 networking devices including
                  routers and switches.
                </li>
                <li>
                  Collaborated with SWEs to validate functionality against IEEE
                  specifications using Ixia, Spirent, and Wireshark.
                </li>
                <li>
                  Headed investigations of complex technical issues and providing
                  solutions for enterprise-scale deployments.
                </li>
                <li>
                  Supported Department of Defense certification processes for Layer 2
                  to 3 products.
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <div className="item_heading">
              <div className="info">
                <h3>Nortel, IT Network Engineer</h3>
                <p>
                  Supported corporate network operations across global offices,
                  managing routing protocols, LAN/WAN architecture, and Unix-based
                  server systems — foundational experience now applied to cloud
                  networking and VPC design.
                </p>
              </div>
              <div className="details">
                <div className="location">Santa Clara, CA.</div>
                <div className="duration">July 1997 - December 2009</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership">
        <h2>Leadership &amp; Activities</h2>
        <div className="items">
          <div className="item">
            <div className="item_heading">
              <div className="info">
                <h3>Apple Inc.</h3>
                <p>
                  Mentored 10+ system administrators and support engineers at Apple,
                  guiding skill development in troubleshooting, automation, and
                  infrastructure best practices.
                </p>
              </div>
            </div>
            <div className="bullets">
              <ul>
                <li>
                  Actively transitioning into cloud engineering through structured
                  labs, AWS certification study, and hands-on portfolio projects.
                </li>
                <li>
                  Currently building a public cloud portfolio on GitHub with AWS,
                  Terraform, and Ansible projects to deepen cloud automation skills.
                </li>
                <li>Preparing for the AWS Solutions Architect – Associate certification.</li>
                <li>
                  Active cloud learner: studying AWS architecture, networking,
                  storage, and monitoring through structured weekly labs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills &amp; Interests</h2>
        <div className="items">
          <div className="item">
            <div className="item_heading">
              <div className="info">
                <div>
                  <strong>Technical: </strong>AWS (EC2, VPC, subnetting, routing, load
                  balancing, IAM), Linux/Windows Server, VMware vSphere &amp; Horizon
                  VDI, Active Directory, VPN, LAN/WAN, Firewalls, Security Groups,
                  Route Tables
                </div>
                <div>
                  <strong>Scripting: </strong>Bash, PowerShell, Python
                </div>
                <div>
                  <strong>Interests: </strong>Cloud automation, building AWS labs,
                  Infrastructure-as-Code, home-lab experimentation, continuous
                  learning in SysOps &amp; DevOps tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}