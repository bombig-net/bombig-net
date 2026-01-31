<template>
  <div class="decision-system-visual" aria-hidden="true">
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
      class="decision-system-svg"
      role="presentation"
    >
      <defs>
        <!-- Core gradient -->
        <radialGradient id="ds-core-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(160, 246, 212, 0.35)" />
          <stop offset="45%" stop-color="rgba(120, 210, 175, 0.18)" />
          <stop offset="100%" stop-color="rgba(80, 160, 130, 0.02)" />
        </radialGradient>

        <!-- Core inner glow -->
        <radialGradient id="ds-core-inner" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="rgba(226, 251, 221, 0.5)" />
          <stop offset="50%" stop-color="rgba(160, 246, 212, 0.2)" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>

        <!-- Node gradient -->
        <radialGradient id="ds-node-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(160, 246, 212, 0.28)" />
          <stop offset="60%" stop-color="rgba(120, 200, 165, 0.12)" />
          <stop offset="100%" stop-color="rgba(90, 160, 130, 0.02)" />
        </radialGradient>

        <!-- Path gradient -->
        <linearGradient id="ds-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(160, 246, 212, 0.04)" />
          <stop offset="50%" stop-color="rgba(160, 246, 212, 0.18)" />
          <stop offset="100%" stop-color="rgba(160, 246, 212, 0.04)" />
        </linearGradient>

        <!-- Blur filter for glow effects -->
        <filter id="ds-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="ds-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>

      <!-- Connection paths - drawn first so they appear behind -->
      <g class="ds-paths">
        <!-- Path to node 1 (top-left) -->
        <path
          d="M400,300 Q320,240 220,180"
          fill="none"
          stroke="url(#ds-path-gradient)"
          stroke-width="1.5"
          class="ds-path ds-path-1"
        />
        <!-- Path to node 2 (top-right) -->
        <path
          d="M400,300 Q480,240 580,180"
          fill="none"
          stroke="url(#ds-path-gradient)"
          stroke-width="1.5"
          class="ds-path ds-path-2"
        />
        <!-- Path to node 3 (left) -->
        <path
          d="M400,300 Q300,310 160,320"
          fill="none"
          stroke="url(#ds-path-gradient)"
          stroke-width="1.5"
          class="ds-path ds-path-3"
        />
        <!-- Path to node 4 (right) -->
        <path
          d="M400,300 Q500,310 640,320"
          fill="none"
          stroke="url(#ds-path-gradient)"
          stroke-width="1.5"
          class="ds-path ds-path-4"
        />
        <!-- Path to node 5 (bottom-left) -->
        <path
          d="M400,300 Q340,380 240,440"
          fill="none"
          stroke="url(#ds-path-gradient)"
          stroke-width="1.5"
          class="ds-path ds-path-5"
        />
        <!-- Path to node 6 (bottom-right) -->
        <path
          d="M400,300 Q460,380 560,440"
          fill="none"
          stroke="url(#ds-path-gradient)"
          stroke-width="1.5"
          class="ds-path ds-path-6"
        />
      </g>

      <!-- Peripheral nodes -->
      <g class="ds-nodes">
        <!-- Node 1: top-left -->
        <g class="ds-node ds-node-1">
          <circle
            cx="220"
            cy="180"
            r="28"
            fill="url(#ds-node-gradient)"
            filter="url(#ds-soft-glow)"
          />
          <circle
            cx="220"
            cy="180"
            r="18"
            fill="none"
            stroke="rgba(160, 246, 212, 0.25)"
            stroke-width="1"
          />
          <circle
            cx="220"
            cy="180"
            r="6"
            fill="rgba(160, 246, 212, 0.4)"
          />
        </g>

        <!-- Node 2: top-right -->
        <g class="ds-node ds-node-2">
          <circle
            cx="580"
            cy="180"
            r="32"
            fill="url(#ds-node-gradient)"
            filter="url(#ds-soft-glow)"
          />
          <circle
            cx="580"
            cy="180"
            r="20"
            fill="none"
            stroke="rgba(160, 246, 212, 0.22)"
            stroke-width="1"
          />
          <circle
            cx="580"
            cy="180"
            r="7"
            fill="rgba(160, 246, 212, 0.35)"
          />
        </g>

        <!-- Node 3: left -->
        <g class="ds-node ds-node-3">
          <circle
            cx="160"
            cy="320"
            r="24"
            fill="url(#ds-node-gradient)"
            filter="url(#ds-soft-glow)"
          />
          <circle
            cx="160"
            cy="320"
            r="15"
            fill="none"
            stroke="rgba(160, 246, 212, 0.2)"
            stroke-width="1"
          />
          <circle
            cx="160"
            cy="320"
            r="5"
            fill="rgba(160, 246, 212, 0.38)"
          />
        </g>

        <!-- Node 4: right -->
        <g class="ds-node ds-node-4">
          <circle
            cx="640"
            cy="320"
            r="26"
            fill="url(#ds-node-gradient)"
            filter="url(#ds-soft-glow)"
          />
          <circle
            cx="640"
            cy="320"
            r="16"
            fill="none"
            stroke="rgba(160, 246, 212, 0.22)"
            stroke-width="1"
          />
          <circle
            cx="640"
            cy="320"
            r="5"
            fill="rgba(160, 246, 212, 0.4)"
          />
        </g>

        <!-- Node 5: bottom-left -->
        <g class="ds-node ds-node-5">
          <circle
            cx="240"
            cy="440"
            r="30"
            fill="url(#ds-node-gradient)"
            filter="url(#ds-soft-glow)"
          />
          <circle
            cx="240"
            cy="440"
            r="19"
            fill="none"
            stroke="rgba(160, 246, 212, 0.24)"
            stroke-width="1"
          />
          <circle
            cx="240"
            cy="440"
            r="6"
            fill="rgba(160, 246, 212, 0.36)"
          />
        </g>

        <!-- Node 6: bottom-right -->
        <g class="ds-node ds-node-6">
          <circle
            cx="560"
            cy="440"
            r="22"
            fill="url(#ds-node-gradient)"
            filter="url(#ds-soft-glow)"
          />
          <circle
            cx="560"
            cy="440"
            r="14"
            fill="none"
            stroke="rgba(160, 246, 212, 0.2)"
            stroke-width="1"
          />
          <circle
            cx="560"
            cy="440"
            r="5"
            fill="rgba(160, 246, 212, 0.35)"
          />
        </g>
      </g>

      <!-- Node labels -->
      <g class="ds-labels">
        <!-- Label 1: top-left - offset above-left -->
        <text
          x="220"
          y="138"
          text-anchor="middle"
          class="ds-label"
          font-family="'Space Grotesk', 'Segoe UI', system-ui, sans-serif"
          font-size="9"
          font-weight="500"
          letter-spacing="0.18em"
          fill="rgba(226, 251, 221, 0.48)"
        >{{ labels[0] }}</text>
        <!-- Label 2: top-right - offset above-right -->
        <text
          x="580"
          y="138"
          text-anchor="middle"
          class="ds-label"
          font-family="'Space Grotesk', 'Segoe UI', system-ui, sans-serif"
          font-size="9"
          font-weight="500"
          letter-spacing="0.18em"
          fill="rgba(226, 251, 221, 0.48)"
        >{{ labels[1] }}</text>
        <!-- Label 3: left - offset to the left -->
        <text
          x="100"
          y="324"
          text-anchor="end"
          class="ds-label"
          font-family="'Space Grotesk', 'Segoe UI', system-ui, sans-serif"
          font-size="9"
          font-weight="500"
          letter-spacing="0.18em"
          fill="rgba(226, 251, 221, 0.48)"
        >{{ labels[2] }}</text>
        <!-- Label 4: right - offset to the right -->
        <text
          x="700"
          y="324"
          text-anchor="start"
          class="ds-label"
          font-family="'Space Grotesk', 'Segoe UI', system-ui, sans-serif"
          font-size="9"
          font-weight="500"
          letter-spacing="0.18em"
          fill="rgba(226, 251, 221, 0.48)"
        >{{ labels[3] }}</text>
        <!-- Label 5: bottom-left - offset below -->
        <text
          x="240"
          y="488"
          text-anchor="middle"
          class="ds-label"
          font-family="'Space Grotesk', 'Segoe UI', system-ui, sans-serif"
          font-size="9"
          font-weight="500"
          letter-spacing="0.18em"
          fill="rgba(226, 251, 221, 0.48)"
        >{{ labels[4] }}</text>
        <!-- Label 6: bottom-right - offset below -->
        <text
          x="560"
          y="488"
          text-anchor="middle"
          class="ds-label"
          font-family="'Space Grotesk', 'Segoe UI', system-ui, sans-serif"
          font-size="9"
          font-weight="500"
          letter-spacing="0.18em"
          fill="rgba(226, 251, 221, 0.48)"
        >{{ labels[5] }}</text>
      </g>

      <!-- Central core -->
      <g class="ds-core" filter="url(#ds-glow)">
        <!-- Outer glow ring -->
        <circle
          cx="400"
          cy="300"
          r="85"
          fill="url(#ds-core-gradient)"
          class="ds-core-glow"
        />
        <!-- Mid ring -->
        <circle
          cx="400"
          cy="300"
          r="55"
          fill="none"
          stroke="rgba(160, 246, 212, 0.2)"
          stroke-width="1"
          class="ds-core-ring"
        />
        <!-- Inner structure -->
        <circle
          cx="400"
          cy="300"
          r="38"
          fill="url(#ds-core-inner)"
          class="ds-core-inner"
        />
        <!-- Core point -->
        <circle
          cx="400"
          cy="300"
          r="12"
          fill="rgba(226, 251, 221, 0.6)"
          class="ds-core-point"
        />
        <!-- Innermost highlight -->
        <circle
          cx="400"
          cy="296"
          r="4"
          fill="rgba(255, 255, 255, 0.5)"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  labels: string[]
}>()
</script>
