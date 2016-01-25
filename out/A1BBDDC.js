goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__129543__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__129543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__129544__i = 0, G__129544__a = new Array(arguments.length -  0);
while (G__129544__i < G__129544__a.length) {G__129544__a[G__129544__i] = arguments[G__129544__i + 0]; ++G__129544__i;}
  args = new cljs.core.IndexedSeq(G__129544__a,0);
} 
return G__129543__delegate.call(this,args);};
G__129543.cljs$lang$maxFixedArity = 0;
G__129543.cljs$lang$applyTo = (function (arglist__129545){
var args = cljs.core.seq(arglist__129545);
return G__129543__delegate(args);
});
G__129543.cljs$core$IFn$_invoke$arity$variadic = G__129543__delegate;
return G__129543;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__129546__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__129546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__129547__i = 0, G__129547__a = new Array(arguments.length -  0);
while (G__129547__i < G__129547__a.length) {G__129547__a[G__129547__i] = arguments[G__129547__i + 0]; ++G__129547__i;}
  args = new cljs.core.IndexedSeq(G__129547__a,0);
} 
return G__129546__delegate.call(this,args);};
G__129546.cljs$lang$maxFixedArity = 0;
G__129546.cljs$lang$applyTo = (function (arglist__129548){
var args = cljs.core.seq(arglist__129548);
return G__129546__delegate(args);
});
G__129546.cljs$core$IFn$_invoke$arity$variadic = G__129546__delegate;
return G__129546;
})()
;

return null;
});
