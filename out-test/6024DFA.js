goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56716__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56717__i = 0, G__56717__a = new Array(arguments.length -  0);
while (G__56717__i < G__56717__a.length) {G__56717__a[G__56717__i] = arguments[G__56717__i + 0]; ++G__56717__i;}
  args = new cljs.core.IndexedSeq(G__56717__a,0);
} 
return G__56716__delegate.call(this,args);};
G__56716.cljs$lang$maxFixedArity = 0;
G__56716.cljs$lang$applyTo = (function (arglist__56718){
var args = cljs.core.seq(arglist__56718);
return G__56716__delegate(args);
});
G__56716.cljs$core$IFn$_invoke$arity$variadic = G__56716__delegate;
return G__56716;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56719__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56720__i = 0, G__56720__a = new Array(arguments.length -  0);
while (G__56720__i < G__56720__a.length) {G__56720__a[G__56720__i] = arguments[G__56720__i + 0]; ++G__56720__i;}
  args = new cljs.core.IndexedSeq(G__56720__a,0);
} 
return G__56719__delegate.call(this,args);};
G__56719.cljs$lang$maxFixedArity = 0;
G__56719.cljs$lang$applyTo = (function (arglist__56721){
var args = cljs.core.seq(arglist__56721);
return G__56719__delegate(args);
});
G__56719.cljs$core$IFn$_invoke$arity$variadic = G__56719__delegate;
return G__56719;
})()
;

return null;
});
