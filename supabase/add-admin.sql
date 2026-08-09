-- Tambah admin berdasarkan email yang sudah terdaftar
-- Jalankan di: Supabase Dashboard → SQL Editor

INSERT INTO admin_users (user_id, email)
SELECT id, email FROM auth.users WHERE email = 'nexivora@gmail.com'
ON CONFLICT (user_id) DO NOTHING;
