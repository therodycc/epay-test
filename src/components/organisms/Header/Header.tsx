import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative p-4 sm:p-6 lg:p-8 overflow-hidden rounded-xl my-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-violet-950">
      {/* Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 h-full flex items-center justify-center sm:justify-start">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 text-center sm:text-left w-full sm:w-auto">
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden">
              <Image
                src="/profile-photo.png"
                width={90}
                height={90}
                alt="Oriontek"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Gestión de Usuarios
            </h1>

            <p className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg text-white/70">
              Bienvenido a{" "}
              <span className="text-indigo-400 font-medium">ePayco</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative glow (desktop only) */}
      <div className="hidden sm:block absolute top-10 right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-16 right-32 w-28 h-28 bg-violet-500/10 rounded-full blur-2xl" />
    </div>
  );
};
