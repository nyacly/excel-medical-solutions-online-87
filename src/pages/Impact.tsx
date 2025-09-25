import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  return (
    <>
      <Helmet>
        <title>Our Impact - Excel Medical Solutions</title>
        <meta name="description" content="See how Excel Medical Solutions is transforming healthcare across Africa with measurable impact and real results." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Measuring our success through the communities we serve and the lives we touch across Africa.
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2.5M+</div>
                  <div className="text-muted-foreground">Patients Served</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Treatment Success Rate</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-muted-foreground">Cost Reduction</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Success Stories
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Rural Healthcare Access</h3>
                  <p className="text-muted-foreground mb-4">
                    Bringing modern medical facilities to remote communities in Kenya, serving over 50,000 people annually.
                  </p>
                  <div className="text-sm text-primary font-semibold">Kenya • 2023</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Emergency Response</h3>
                  <p className="text-muted-foreground mb-4">
                    24/7 emergency medical services reducing response times by 60% in urban centers across Nigeria.
                  </p>
                  <div className="text-sm text-primary font-semibold">Nigeria • 2023</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Maternal Health</h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized maternal healthcare programs reducing infant mortality by 35% in Ghana.
                  </p>
                  <div className="text-sm text-primary font-semibold">Ghana • 2023</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Impact;