goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54765__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54766__i = 0, G__54766__a = new Array(arguments.length -  0);
while (G__54766__i < G__54766__a.length) {G__54766__a[G__54766__i] = arguments[G__54766__i + 0]; ++G__54766__i;}
  args = new cljs.core.IndexedSeq(G__54766__a,0);
} 
return G__54765__delegate.call(this,args);};
G__54765.cljs$lang$maxFixedArity = 0;
G__54765.cljs$lang$applyTo = (function (arglist__54767){
var args = cljs.core.seq(arglist__54767);
return G__54765__delegate(args);
});
G__54765.cljs$core$IFn$_invoke$arity$variadic = G__54765__delegate;
return G__54765;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54768__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54769__i = 0, G__54769__a = new Array(arguments.length -  0);
while (G__54769__i < G__54769__a.length) {G__54769__a[G__54769__i] = arguments[G__54769__i + 0]; ++G__54769__i;}
  args = new cljs.core.IndexedSeq(G__54769__a,0);
} 
return G__54768__delegate.call(this,args);};
G__54768.cljs$lang$maxFixedArity = 0;
G__54768.cljs$lang$applyTo = (function (arglist__54770){
var args = cljs.core.seq(arglist__54770);
return G__54768__delegate(args);
});
G__54768.cljs$core$IFn$_invoke$arity$variadic = G__54768__delegate;
return G__54768;
})()
;

return null;
});
