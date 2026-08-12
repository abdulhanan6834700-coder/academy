<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Al Noor Quran Academy - Admin Login</title>
  
  <!-- 1. Tailwind for styling -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- 2. Supabase Library - MUST BE FIRST -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <!-- 3. Supabase Config - MUST BE SECOND -->
  <script>
    const SUPABASE_URL = "https://vxquqxiblysgzrpgfvgc.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_6ItmZHYYCjj0dn7nz7-uLQ_wzXwUJrO";
    
    // Initialize Supabase Client globally
    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // For old code compatibility
    window.SUPABASE_CONFIG = {
      url: SUPABASE_URL,
      anonKey: SUPABASE_ANON_KEY
    };
  </script>
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">

  <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
    <h1 class="text-2xl font-bold text-center text-[#1a3a8f] mb-6">Admin Login</h1>
    
    <form id="login-form">
      <div class="mb-4">
        <label class="block text-gray-700 mb-2">Email</label>
        <input type="email" id="email" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 mb-2">Password</label>
        <input type="password" id="password" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]">
      </div>
      <button type="submit" id="login-btn" class="w-full bg-[#1a3a8f] text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition duration-300">
        Login
      </button>
      <p id="error-msg" class="text-red-500 text-center mt-4 hidden"></p>
    </form>
  </div>

  <script>
    const form = document.getElementById('login-form');
    const errorMsg = document.getElementById('error-msg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      errorMsg.classList.add('hidden');

      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        errorMsg.textContent = error.message;
        errorMsg.classList.remove('hidden');
      } else {
        // Login successful. Redirect to dashboard
        window.location.href = '/dashboard.html'; 
      }
    });
  </script>

</body>
</html>
