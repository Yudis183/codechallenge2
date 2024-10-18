import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <Image src="/path-to-hero-image.jpg" alt="Hero Image" layout="fill" />
        <div className="hero-text">
          <h1>Welcome to Our Company</h1>
          <p>Leading the industry with innovation.</p>
          <Link href="/about"><a>Learn More</a></Link>
        </div>
      </section>

      {/* Company Overview */}
      <section className="overview">
        <h2>Who We Are</h2>
        <p>We are a company that values excellence...</p>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Service 1</h3>
            <p>Description of Service 1</p>
          </div>
          <div className="service-item">
            <h3>Service 2</h3>
            <p>Description of Service 2</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          <p>Great company, excellent services.</p>
          <cite>— Client Name</cite>
        </blockquote>
      </section>
    </div>
  );
}
