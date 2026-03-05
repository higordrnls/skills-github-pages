<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<script>
  // Definição das credenciais (com as aspas para o JS não ler como comentário)
  const supabaseUrl = 'https://vnablodqafeqyuxxirnn.supabase.co';
  const supabaseKey = 'sb_publishable_4uMYsIDc2Q9Cra31y8TOYg_q-RCGVYR';

  // Inicializa o cliente do Supabase
  const _supabase = lib.supabase.createClient(supabaseUrl, supabaseKey);

  // Teste rápido para saber se conectou (aparecerá no F12 do navegador)
  console.log("ArchiveOne conectado ao Supabase");
</script>
