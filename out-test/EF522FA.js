goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10781__i = 0, G__10781__a = new Array(arguments.length -  0);
while (G__10781__i < G__10781__a.length) {G__10781__a[G__10781__i] = arguments[G__10781__i + 0]; ++G__10781__i;}
  args = new cljs.core.IndexedSeq(G__10781__a,0);
} 
return G__10780__delegate.call(this,args);};
G__10780.cljs$lang$maxFixedArity = 0;
G__10780.cljs$lang$applyTo = (function (arglist__10782){
var args = cljs.core.seq(arglist__10782);
return G__10780__delegate(args);
});
G__10780.cljs$core$IFn$_invoke$arity$variadic = G__10780__delegate;
return G__10780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10784__i = 0, G__10784__a = new Array(arguments.length -  0);
while (G__10784__i < G__10784__a.length) {G__10784__a[G__10784__i] = arguments[G__10784__i + 0]; ++G__10784__i;}
  args = new cljs.core.IndexedSeq(G__10784__a,0);
} 
return G__10783__delegate.call(this,args);};
G__10783.cljs$lang$maxFixedArity = 0;
G__10783.cljs$lang$applyTo = (function (arglist__10785){
var args = cljs.core.seq(arglist__10785);
return G__10783__delegate(args);
});
G__10783.cljs$core$IFn$_invoke$arity$variadic = G__10783__delegate;
return G__10783;
})()
;

return null;
});
