goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__278647__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__278647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278648__i = 0, G__278648__a = new Array(arguments.length -  0);
while (G__278648__i < G__278648__a.length) {G__278648__a[G__278648__i] = arguments[G__278648__i + 0]; ++G__278648__i;}
  args = new cljs.core.IndexedSeq(G__278648__a,0);
} 
return G__278647__delegate.call(this,args);};
G__278647.cljs$lang$maxFixedArity = 0;
G__278647.cljs$lang$applyTo = (function (arglist__278649){
var args = cljs.core.seq(arglist__278649);
return G__278647__delegate(args);
});
G__278647.cljs$core$IFn$_invoke$arity$variadic = G__278647__delegate;
return G__278647;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__278650__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__278650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278651__i = 0, G__278651__a = new Array(arguments.length -  0);
while (G__278651__i < G__278651__a.length) {G__278651__a[G__278651__i] = arguments[G__278651__i + 0]; ++G__278651__i;}
  args = new cljs.core.IndexedSeq(G__278651__a,0);
} 
return G__278650__delegate.call(this,args);};
G__278650.cljs$lang$maxFixedArity = 0;
G__278650.cljs$lang$applyTo = (function (arglist__278652){
var args = cljs.core.seq(arglist__278652);
return G__278650__delegate(args);
});
G__278650.cljs$core$IFn$_invoke$arity$variadic = G__278650__delegate;
return G__278650;
})()
;

return null;
});
