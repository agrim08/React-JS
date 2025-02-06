import React from "react";
import { Clock, UtensilsCrossed, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Delicious Food,
                <br />
                <span className="text-orange-500">Delivered</span> to You
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Experience restaurant-quality meals delivered right to your
                doorstep. Fresh, fast, and always delicious.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={"/home"}>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transform hover:scale-105 transition duration-300">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold">
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Your favorite meals delivered in 30 minutes or less, guaranteed
                fresh and hot.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <UtensilsCrossed className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality Food
              </h3>
              <p className="text-gray-600">
                Prepared by top chefs using the finest ingredients for an
                exceptional dining experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Best Service
              </h3>
              <p className="text-gray-600">
                Dedicated support team ensuring your complete satisfaction with
                every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Dishes
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                name: "Pizza",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
                name: "Burger",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
                name: "Noodles",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                name: "Fresh Salad",
              },
            ].map((dish, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {dish.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80')",
          }}
        ></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Ready to Experience the Best Food Delivery Service?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of satisfied customers who trust us for their daily
              meals. Get started today and enjoy exclusive offers!
            </p>
            <Link to={"/home"}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto transform hover:scale-105 transition duration-300">
                Get Started <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
