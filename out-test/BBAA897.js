goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48151__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48152__i = 0, G__48152__a = new Array(arguments.length -  0);
while (G__48152__i < G__48152__a.length) {G__48152__a[G__48152__i] = arguments[G__48152__i + 0]; ++G__48152__i;}
  args = new cljs.core.IndexedSeq(G__48152__a,0);
} 
return G__48151__delegate.call(this,args);};
G__48151.cljs$lang$maxFixedArity = 0;
G__48151.cljs$lang$applyTo = (function (arglist__48153){
var args = cljs.core.seq(arglist__48153);
return G__48151__delegate(args);
});
G__48151.cljs$core$IFn$_invoke$arity$variadic = G__48151__delegate;
return G__48151;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48154__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48155__i = 0, G__48155__a = new Array(arguments.length -  0);
while (G__48155__i < G__48155__a.length) {G__48155__a[G__48155__i] = arguments[G__48155__i + 0]; ++G__48155__i;}
  args = new cljs.core.IndexedSeq(G__48155__a,0);
} 
return G__48154__delegate.call(this,args);};
G__48154.cljs$lang$maxFixedArity = 0;
G__48154.cljs$lang$applyTo = (function (arglist__48156){
var args = cljs.core.seq(arglist__48156);
return G__48154__delegate(args);
});
G__48154.cljs$core$IFn$_invoke$arity$variadic = G__48154__delegate;
return G__48154;
})()
;

return null;
});
