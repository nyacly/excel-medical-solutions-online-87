
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Excel Medical Solutions - Transforming Healthcare Across Africa</title>
        <meta name="description" content="Professional medical services across Africa. Ethically. Efficiently. Faithfully." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/banner_image.jpg')" }}></div>
          
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforming Healthcare Services Across Africa
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Ethically. Efficiently. Faithfully.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
                Explore Our Mission
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-lg text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-lg text-muted-foreground">Medical Procedures</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Serving</div>
                <div className="text-lg text-muted-foreground">Communities Across Africa</div>
              </div>
            </div>
          </div>
        </section>

        {/* Expansion Journey */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Expansion Journey
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="text-sm">Phase 1</Badge>
                    <span className="text-lg">Pilot Programs</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="text-sm">Phase 2</Badge>
                    <span className="text-lg">Regional Expansion</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="text-sm">Phase 3</Badge>
                    <span className="text-lg">Continental Coverage</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="/lovable-uploads/african_map.png" 
                  alt="Map of Africa highlighting Excel Medical expansion journey" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Learn More Cards */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Learn More
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Impact</h3>
                  <p className="text-muted-foreground mb-4">How we're making a difference in healthcare across Africa</p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Services</h3>
                  <p className="text-muted-foreground mb-4">Comprehensive medical services and healthcare solutions</p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Investor Briefing</h3>
                  <p className="text-muted-foreground mb-4">Opportunities in investing with us in African healthcare</p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-6">Trusted by healthcare institutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Serving Africa's most trusted healthcare providers
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              From rural community clinics to major medical centers, Excel Medical powers reliable healthcare delivery and transparent reporting.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <div className="text-center">
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-card-foreground">Nairobi Hospital</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-card-foreground">Cape Town Clinic</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-card-foreground">Lagos Medical</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-card-foreground">Addis Health</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-card-foreground">Accra General</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-card-foreground">Dar Medical</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-6">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              A comprehensive healthcare delivery system from consultation to recovery
            </h2>
            <Button variant="outline" className="mb-16">
              Explore the full process →
            </Button>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Connect Online</h3>
                <p className="text-muted-foreground">Patients connect with certified medical professionals through our secure platform.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-foreground mb-4">We Deliver Care</h3>
                <p className="text-muted-foreground">Smart routing connects patients to the right specialists with real-time health monitoring.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Patients Recover</h3>
                <p className="text-muted-foreground">Comprehensive follow-up care and verified treatment outcomes ensure optimal health results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Snapshot */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-wide text-primary-foreground/70 mb-6">Impact snapshot</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Creating measurable change in African healthcare
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">2.5M+</div>
                <div className="text-primary-foreground/80">Patients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-primary-foreground/80">Treatment Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-primary-foreground/80">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/80">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
