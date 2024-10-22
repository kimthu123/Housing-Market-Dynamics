import React from 'react';
import './AboutUs.css';  // For the About Us page styles

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO & Founder',
    bio: 'John has over 20 years of experience in real estate and has led the company from its inception.',
    image: 'path_to_image1'  // Replace with actual image paths
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Head of Marketing',
    bio: 'Jane is a marketing expert with a keen eye for strategy and has been pivotal in growing the brand.',
    image: 'path_to_image2'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    position: 'Lead Developer',
    bio: 'Bob is the technical backbone of the company, ensuring our website is seamless and user-friendly.',
    image: 'path_to_image3'
  }
];

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Company Overview Section */}
      <section className="company-overview">
        <h1>Company Overview</h1>
        <p>
          At Real Estate Investments, we specialize in helping our clients find their dream properties, whether for living or investing. 
          Our mission is to deliver value-driven real estate solutions with integrity, trust, and unmatched expertise.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2010, Real Estate Investments started with a vision to create an approachable, client-focused real estate firm. 
          Over the years, we have grown from a small, dedicated team into a leading name in the real estate market, 
          working across multiple regions to secure the best deals for our clients.
        </p>
        <p>
          Our journey began with humble origins and a desire to innovate the real estate experience. Through dedication, 
          our network expanded and we became known for creating lasting relationships with our clients based on transparency and mutual success.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
