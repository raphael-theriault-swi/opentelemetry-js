/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Context,
  Sampler,
  SamplingDecision,
  SamplingResult,
  trace,
} from '@opentelemetry/api';

/**
 * @deprecated Use the one defined in @opentelemetry/sdk-trace-base instead.
 * Sampler that samples all traces.
 */
export class AlwaysOnSampler implements Sampler {
  shouldSample(context: Context): SamplingResult {
    return {
      decision: SamplingDecision.RECORD_AND_SAMPLED,
      traceState: trace.getSpanContext(context)?.traceState,
    };
  }

  toString(): string {
    return 'AlwaysOnSampler';
  }
}
