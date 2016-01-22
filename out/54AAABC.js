goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10776__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10777__i = 0, G__10777__a = new Array(arguments.length -  0);
while (G__10777__i < G__10777__a.length) {G__10777__a[G__10777__i] = arguments[G__10777__i + 0]; ++G__10777__i;}
  args = new cljs.core.IndexedSeq(G__10777__a,0);
} 
return G__10776__delegate.call(this,args);};
G__10776.cljs$lang$maxFixedArity = 0;
G__10776.cljs$lang$applyTo = (function (arglist__10778){
var args = cljs.core.seq(arglist__10778);
return G__10776__delegate(args);
});
G__10776.cljs$core$IFn$_invoke$arity$variadic = G__10776__delegate;
return G__10776;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10779__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10780__i = 0, G__10780__a = new Array(arguments.length -  0);
while (G__10780__i < G__10780__a.length) {G__10780__a[G__10780__i] = arguments[G__10780__i + 0]; ++G__10780__i;}
  args = new cljs.core.IndexedSeq(G__10780__a,0);
} 
return G__10779__delegate.call(this,args);};
G__10779.cljs$lang$maxFixedArity = 0;
G__10779.cljs$lang$applyTo = (function (arglist__10781){
var args = cljs.core.seq(arglist__10781);
return G__10779__delegate(args);
});
G__10779.cljs$core$IFn$_invoke$arity$variadic = G__10779__delegate;
return G__10779;
})()
;

return null;
});
