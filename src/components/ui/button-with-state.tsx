import React, { useState } from "react";

import { Button } from "@/components/ui/button";

export default function ButtonWithState({ initial = 0 }: { initial?: number }) {
  return <Button variant="secondary">Add element</Button>;
}
