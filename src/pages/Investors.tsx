import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>Investor Centre - Excel Medical Solutions</title>
        <meta name="description" content="Investment opportunities in transforming African healthcare. Join us in building sustainable medical infrastructure across the continent." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investor Centre
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Partner with us to transform healthcare across Africa while generating sustainable returns.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
              Download Investment Brief
            </Button>
          </div>
        </section>

        {/* Investment Opportunity */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Opportunity
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Africa's healthcare market is experiencing unprecedented growth, with a projected market size of $180 billion by 2030. Excel Medical Solutions is positioned at the forefront of this transformation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Scalable technology platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Proven business model</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Strong local partnerships</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/african_map.png" 
                  alt="African market opportunity map" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investment Metrics */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Investment Metrics
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-muted-foreground">Annual Growth Rate</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50M</div>
                  <div className="text-muted-foreground">Revenue Target 2025</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground">Countries by 2026</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Invest in Africa's Healthcare Future?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact our investor relations team to learn more about partnership opportunities.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
              Schedule Investor Call
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Investors;