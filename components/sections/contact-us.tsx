import { Mail, Phone, MapPin, Send } from "lucide-react"

const ContactUs = () => {
  return (
    <section id="contact-us" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            Have questions about our programs? Ready to take the next step in your professional development? Get in
            touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 reveal">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form name="contact" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8 reveal reveal-delay-2">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-300">
                      123 Training Avenue, Suite 200
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-300">
                      info@qleap.com
                      <br />
                      support@qleap.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-300">
                      +1 (123) 456-7890
                      <br />
                      +1 (987) 654-3210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-black p-6 rounded-xl border border-blue-900/30">
              <h3 className="text-xl font-semibold mb-3">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-4">Our team is ready to provide quick support for urgent inquiries.</p>
              <a href="tel:+11234567890" className="btn-primary inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
