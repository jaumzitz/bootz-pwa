import React from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import Spacer from "../Spacer/Spacer";
import { Span } from "../TextContent/Span/Span";
import { Title } from "../TextContent/Title/Title";
import { useAuth } from "../../context/AuthContext";
import { sendFeedback } from "../../services/sendFeedback";

export function FeedbackBox() {
    const { session, username } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors }
    } = useForm();
    const [status, setStatus] = React.useState(null);

    const onSubmit = async (data) => {
        if (!session?.user?.id) {
            setStatus("Usuário não autenticado.");
            return;
        }

        if (!data.description || data.description.trim() === "") {

            return;
        }
        setStatus("Enviando...");
        try {

            await sendFeedback(data.description, username);
            setStatus("Obrigado por ajudar a melhorar o Bootz!");
            reset();
        } catch (error) {
            setStatus("Erro ao enviar feedback: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '0 4vw' }}>
            <Title size={'medium'}>Deixe sua opinião! ❤️</Title>
            <Spacer height={'8px'} />
            <Span color={'#888'}>
                Sugestões de novas funcionalidades, dúvidas e elogios são bem vindos!
            </Span>
            <textarea
                {...register("description", { maxLength: 300 })}
                placeholder="Eu gostaria de ver mais funcionalidades como..."
                rows={4}
                maxLength={300}
                style={{
                    width: '94%',
                    height: '80px',
                    borderRadius: '8px',
                    margin: '18px 0',
                    padding: '8px',
                    fontFamily: 'var(--default-label-font)'
                }}
                disabled={isSubmitting}
            />
            {errors.description && (
                <Span color="red">{errors.description.message}</Span>
            )}
            {status && <><Span color={"#888888"}>{status}</Span><Spacer height={'12px'} /></>}

            <PrimaryButton width={'180px'} type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar feedback"}
            </PrimaryButton>

        </form>
    );
}