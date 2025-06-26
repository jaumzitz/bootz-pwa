import React, { useState } from "react";
import styled from "styled-components"
import { Title } from "../TextContent/Title/Title"
import { LinkButton } from "../LinkButton/LinkButton"
import { HorizontalScroll } from "../Scrolls/Scroll"
import CommentCard from "../CommentCard/CommentCard"
import Spacer from "../Spacer/Spacer"
import { Input } from "../Input/Input"
import { useFetchComments } from "../../hooks/useFetchComments"
import Banner from "../Banner/Banner"
import { PrimaryButton } from "../PrimaryButton/PrimaryButton"
import { TextArea } from "../TextArea/TextArea"
import { sendComment } from "../../services/sendComment"
import { useAuth } from "../../context/AuthContext"

const SectionPadding = styled.section`
    padding: 2vh 4vw;
`

const CommentCount = styled.span`
    background-color: #d9d9d9;
    border-radius: 60px;
    font-family: var(--default-label-font);
    padding: 4px 8px;
    font-size: 14px;
    text-align: center;
     display: flex;
    align-items: center;
    justify-content: center;
`

export default function TrailCommentsSection({ trailId, totalComments }) {
    const { data: comments = [], isLoading, error, refetch } = useFetchComments(trailId)
    const [comment, setComment] = useState("");
    const [isSending, setIsSending] = useState(false);
    const { username } = useAuth();

    async function handleSendComment() {
        if (!comment.trim()) return; // Não permite comentário vazio
        setIsSending(true);
        try {
            await sendComment({
                trail_id: trailId,
                content: comment,
                created_by: username
            });
            setComment("");
            refetch()
            // Aqui você pode recarregar os comentários, se desejar
            // Exemplo: refetch() se usar react-query ou SWR
        } catch (e) {
            alert("Erro ao enviar comentário: " + e.message);
        }
        setIsSending(false);
    }

    return (
        <>
            <SectionPadding>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                        <Title>Comentários</Title>
                        <CommentCount>{totalComments}</CommentCount>
                    </div>
                    {/* <LinkButton>Ver tudo</LinkButton> */}
                </div>
            </SectionPadding>

            <HorizontalScroll>
                {comments.length == 0 ? <Banner title="O que você achou desse lugar?" description="Seja o primeiro a comentar!" /> :
                    comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
            </HorizontalScroll>

            <SectionPadding>
                <TextArea
                    height='60px'
                    placeholder="Deixe um comentário..."
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <PrimaryButton
                    width={'210px'}
                    onClick={handleSendComment}
                    disabled={isSending || !comment.trim()}
                    isLoading={isSending}
                >
                    Enviar comentário
                </PrimaryButton>
            </SectionPadding>
        </>
    )
}