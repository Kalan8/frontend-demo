import PlayerForm from "@/components/PlayerForm";

const congratulateRegistration = () => {
  confirm("Well done! \nThank you for your registration");
};

const PlayerRegistrationPage = () => {

    return (
    <div className="flex flex-col gap-1 rounded-xl p-1 inset-ring inset-ring-gray-950/5 dark:inset-ring dark:inset-ring-gray-50/5 m-30">
      <h1 className="text-2xl font-bold mb-6">Lottery</h1>
      
      <PlayerForm onPlayerCreated={congratulateRegistration} titleForm="Register now and win !" />
</div>
)
};

export default PlayerRegistrationPage;