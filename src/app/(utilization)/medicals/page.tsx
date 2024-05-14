import React from 'react';
import Title from "@/components/UI/Text/Title/Title";
import Paragraph from "@/components/UI/Text/Paragraph/Paragraph";
import Text from "@/components/UI/Text/Text/Text";

const Page = () => {
    return (
        <Text>
            <Title>Утилизация медицинского оборудования</Title>
            <Paragraph>С появлением в медицине одноразовых материалов и огромного количества медтехники появилась острая
                потребность в регулярной профессиональной утилизации этих предметов. Действительно, если, к примеру,
                взять самое простое - всем известные одноразовые шприцы и иглы, то можно только представить, сколько их
                остается к вечеру лишь в одном отдельно взятом процедурном кабинете. Это речь еще не идет о медицинских
                аппаратах, которые могут быть опасными, даже если они находятся в нерабочем состоянии, и которые поэтому
                необходимо не просто выбросить в мусор после завершения эксплуатации, но и обязательно уничтожить –
                таковы правила для всех медучреждений, утвержденные законом.</Paragraph>
        </Text>
    );
};

export default Page;