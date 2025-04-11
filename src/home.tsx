import React from 'react';
import { Heart, Clock, Phone, MapPin, Stethoscope, Calendar } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header 
      <header className="bg-white shadow-sm">
  <div className="container mx-auto px-4 py-6 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <img
        src="/logo.jpg"
        alt="Logo"
        className="h-12 w-auto object-contain"
      />
    </div>
    <nav className="hidden md:flex space-x-8">
      <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
      <a href="#hours" className="text-gray-600 hover:text-blue-600">Hours</a>
      <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
    </nav>
  </div>
</header>
*/}
<section className="container mx-auto px-4 py-16">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
    
    
      {/* SIRONA CEREC Primescan milling machine details */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="text-base font-semibold text-gray-800 mb-1">
          SIRONA CEREC Primescan milling machine
        </p>
        <p className="text-sm text-gray-700 mb-1">SN: 85746C2</p>
        <img src='2.jpg' style={{width:99}}></img>
        <p className="text-sm font-semibold text-gray-800 mt-2">Dentsply Sirona</p>
        <p className="text-sm text-gray-700">Sirona Dental Systems</p>
        <p className="text-sm text-gray-700 font-medium">MADE IN GERMANY</p>
      </div>
    </div>

    <div className="relative">
      <img
        src="logo.jpg"
        alt="Medical professionals"
        className="rounded-2xl shadow-xl"
      />
    </div>
  </div>
</section>


      {/* Hero Section 
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Health Is Our Priority
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Professional healthcare services with a personal touch. 
              Experience the best medical care with our expert team.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Book Appointment
            </button>
          </div>
          <div className="relative">
            <img
                src='logo.jpg'
            //  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
              alt="Medical professionals"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

       Features 
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl">
              <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Experienced medical professionals dedicated to your care</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock medical care for emergencies</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Simple online booking for your appointments</p>
            </div>
          </div>
        </div>
      </section>

       Contact Info 
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">123 Healthcare Avenue<br />Medical District, City 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">Phone: (555) 123-4567<br />Email: info@healthcareclinic.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src='logo.jpg' style={{width:63}}></img>
            <span className="text-xl font-bold">Dentsply Sirona </span>
          </div>
          <p className="text-gray-400">© 2025 Sirona Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;