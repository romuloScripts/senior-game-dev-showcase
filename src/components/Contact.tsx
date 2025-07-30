import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

const EMAILJS_SERVICE_ID = 'service_251keda';
const EMAILJS_TEMPLATE_ID = 'template_qllmp9c';
const EMAILJS_PUBLIC_KEY = 'aFAYt1B__1bhAzCFC';

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, // You'll need to configure this in EmailJS
        EMAILJS_TEMPLATE_ID, // You'll need to create this template
        {
          name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          title: data.subject,
          message: data.message,
          to_email: 'romulossan@gmail.com',
        },
        EMAILJS_PUBLIC_KEY // You'll need to add your EmailJS public key
      );
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
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

              {/* LinkedIn Connect */}
              <div className="mt-8">
                <a 
                  href="https://www.linkedin.com/in/romulogamedev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-gaming-primary to-gaming-accent text-gaming-bg-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-gaming-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Linkedin className="h-6 w-6 mr-3" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-gradient-card border-gaming-bg-tertiary">
                <h3 className="text-2xl font-bold text-gaming-text mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gaming-text font-medium mb-2">
                        First Name
                      </label>
                      <Input 
                        type="text" 
                        placeholder="John" 
                        className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted"
                        {...register('firstName')}
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gaming-text font-medium mb-2">
                        Last Name
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Doe" 
                        className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted"
                        {...register('lastName')}
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gaming-text font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gaming-text font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Project Discussion" 
                      className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted"
                      {...register('subject')}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gaming-text font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project or opportunity..." 
                      rows={5} 
                      className="bg-gaming-bg-tertiary border-gaming-bg-tertiary text-gaming-text placeholder:text-gaming-text-muted"
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" variant="gaming" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
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