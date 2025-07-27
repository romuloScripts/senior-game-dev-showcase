import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };
  return <section id="contact" className="py-20 bg-gaming-bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gaming-text mb-6">
              Let's <span className="text-gaming-primary">Connect</span>
            </h2>
            <p className="text-xl text-gaming-text-muted max-w-3xl mx-auto">Ready to create something amazing together? I'm always interested in discussing new opportunities, collaborations, mentorship or just chatting about game development.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gaming-text mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gaming-bg-tertiary rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gaming-primary" />
                  </div>
                  <div>
                    <h4 className="text-gaming-text font-semibold">Email</h4>
                    <p className="text-gaming-text-muted">romulossan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gaming-bg-tertiary rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gaming-primary" />
                  </div>
                  <div>
                    <h4 className="text-gaming-text font-semibold">Phone</h4>
                    <p className="text-gaming-text-muted">+55 (31) 9 9116-7675</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gaming-bg-tertiary rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gaming-primary" />
                  </div>
                  <div>
                    <h4 className="text-gaming-text font-semibold">Location</h4>
                    <p className="text-gaming-text-muted">Curitiba, Brasil</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-gaming-text font-semibold mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/romulogamedev/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gaming-bg-tertiary rounded-lg flex items-center justify-center hover:bg-gaming-primary hover:text-gaming-bg-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/romuloScripts" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gaming-bg-tertiary rounded-lg flex items-center justify-center hover:bg-gaming-primary hover:text-gaming-bg-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="mailto:romulossan@gmail.com" className="w-12 h-12 bg-gaming-bg-tertiary rounded-lg flex items-center justify-center hover:bg-gaming-primary hover:text-gaming-bg-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <Card className="p-6 mt-8 bg-gradient-card border-gaming-bg-tertiary">
                <h4 className="text-gaming-text font-semibold mb-3">Current Availability</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-gaming-accent rounded-full"></div>
                  <span className="text-gaming-text">Available for new opportunities</span>
                </div>
                <p className="text-gaming-text-muted text-sm">
                  Open to freelancer opportunities, consulting projects, and interesting collaborations.
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-gradient-card border-gaming-bg-tertiary">
                <h3 className="text-2xl font-bold text-gaming-text mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gaming-text font-medium mb-2">
                        First Name
                      </label>
                      <Input type="text" placeholder="John" className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted" />
                    </div>
                    <div>
                      <label className="block text-gaming-text font-medium mb-2">
                        Last Name
                      </label>
                      <Input type="text" placeholder="Doe" className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gaming-text font-medium mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted" />
                  </div>

                  <div>
                    <label className="block text-gaming-text font-medium mb-2">
                      Subject
                    </label>
                    <Input type="text" placeholder="Project Discussion" className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted" />
                  </div>

                  <div>
                    <label className="block text-gaming-text font-medium mb-2">
                      Message
                    </label>
                    <Textarea placeholder="Tell me about your project or opportunity..." rows={5} className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted" />
                  </div>

                  <Button type="submit" variant="gaming" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;