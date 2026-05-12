"use client";

import { Button, Column, IconButton, Row, Text } from "@once-ui-system/core";
import { useCallback, useEffect, useState } from "react";

export type PdfPreviewModalProps = {
  title: string;
  src: string;
  buttonLabel?: string;
  iframeHeight?: number;
};

export function PdfPreviewModal({
  title,
  src,
  buttonLabel = "View poster",
  iframeHeight = 720,
}: PdfPreviewModalProps) {
  const [open, setOpen] = useState(false);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onKeyDown]);

  return (
    <>
      <Button
        label={buttonLabel}
        prefixIcon="document"
        size="s"
        variant="secondary"
        onClick={() => setOpen(true)}
        style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#3b82f6",
          boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.25)",
        }}
      />
      {open && (
        <Row
          role="presentation"
          position="fixed"
          top="0"
          right="0"
          bottom="0"
          left="0"
          horizontal="center"
          vertical="center"
          padding="16"
          style={{
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.55)",
            backdropFilter: "blur(2px)",
          }}
          onClick={() => setOpen(false)}
        >
          <Column
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-preview-modal-title"
            fillWidth
            maxWidth={52}
            background="surface"
            radius="l"
            border="neutral-medium"
            padding="m"
            gap="m"
            style={{ maxHeight: "min(92vh, 900px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Row horizontal="between" vertical="center" fillWidth gap="8">
              <Text id="pdf-preview-modal-title" variant="heading-strong-s">
                {title}
              </Text>
              <IconButton
                type="button"
                icon="x"
                variant="ghost"
                tooltip="Close"
                onClick={() => setOpen(false)}
                aria-label="Close poster viewer"
              />
            </Row>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Scroll and zoom using your browser&apos;s PDF controls.
            </Text>
            {/* PDF viewers often ignore % height inside flex; absolute inset forces the iframe to fill. */}
            <div
              style={{
                position: "relative",
                width: "100%",
                minHeight: 320,
                maxHeight: iframeHeight,
                height: `min(${iframeHeight}px, calc(100dvh - 12rem))`,
                borderRadius: "var(--radius-m, 8px)",
                overflow: "hidden",
                border: "1px solid var(--neutral-border-medium, rgba(255, 255, 255, 0.12))",
              }}
            >
              <iframe
                title={title}
                src={src.includes("#") ? src : `${src}#view=FitH`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          </Column>
        </Row>
      )}
    </>
  );
}
