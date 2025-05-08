
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Зелёная кнопка</h1>
        <p className="text-gray-600 mb-8">
          Пример красивой зелёной кнопки с эффектом наведения
        </p>
        
        <Button 
          className="bg-emerald-500 hover:bg-emerald-600 transition-colors duration-200 px-6 py-3 text-white font-medium"
        >
          <Icon name="ThumbsUp" className="mr-2" />
          Нажми меня
        </Button>
      </div>
    </div>
  );
};

export default Index;
