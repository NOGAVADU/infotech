import React from 'react';
import Title from "@/components/UI/Text/Title/Title";
import Paragraph from "@/components/UI/Text/Paragraph/Paragraph";
import Text from "@/components/UI/Text/Text/Text";

const Page = () => {
    return (
        <Text>
            <Title>Утилизация принтеров</Title>
            <Paragraph>На первый взгляд, утилизировать принтер не так сложно. Но что делать, если, к примеру, он весит
                пару центнеров? Даже в количестве одной штуки такой принтер станет головной болью. А если представить,
                что, например, нужно списать с баланса фирмы и утилизировать десяток таких принтеров? В этом случае
                просто вывозом техники на свалку не ограничишься, потому что, по законодательству утилизация должна быть
                задокументирована: при избавлении от старого оборудования в обязательном порядке оформляются акты
                списания и утилизации, отсутствие которых может вылиться в серьезные проблемы для фирмы.</Paragraph>
            <Paragraph>Нередко серьезную проблему представляет сам вывоз принтеров. К счастью, компании и офисы не
                остались с этой проблемой один на один: как правило, в услуги компании, занимающейся утилизацией старой
                техники, входит вывоз отработанного оборудования на собственном транспорте. Поэтому будьте уверены:
                обращение к специалистам за помощью в утилизации отработанных принтеров решить все ваши
                проблемы.</Paragraph>
        </Text>
    );
};

export default Page;