goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44184__i = 0, G__44184__a = new Array(arguments.length -  0);
while (G__44184__i < G__44184__a.length) {G__44184__a[G__44184__i] = arguments[G__44184__i + 0]; ++G__44184__i;}
  args = new cljs.core.IndexedSeq(G__44184__a,0);
} 
return G__44183__delegate.call(this,args);};
G__44183.cljs$lang$maxFixedArity = 0;
G__44183.cljs$lang$applyTo = (function (arglist__44185){
var args = cljs.core.seq(arglist__44185);
return G__44183__delegate(args);
});
G__44183.cljs$core$IFn$_invoke$arity$variadic = G__44183__delegate;
return G__44183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44187__i = 0, G__44187__a = new Array(arguments.length -  0);
while (G__44187__i < G__44187__a.length) {G__44187__a[G__44187__i] = arguments[G__44187__i + 0]; ++G__44187__i;}
  args = new cljs.core.IndexedSeq(G__44187__a,0);
} 
return G__44186__delegate.call(this,args);};
G__44186.cljs$lang$maxFixedArity = 0;
G__44186.cljs$lang$applyTo = (function (arglist__44188){
var args = cljs.core.seq(arglist__44188);
return G__44186__delegate(args);
});
G__44186.cljs$core$IFn$_invoke$arity$variadic = G__44186__delegate;
return G__44186;
})()
;

return null;
});
