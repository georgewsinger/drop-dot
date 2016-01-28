goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51012__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51013__i = 0, G__51013__a = new Array(arguments.length -  0);
while (G__51013__i < G__51013__a.length) {G__51013__a[G__51013__i] = arguments[G__51013__i + 0]; ++G__51013__i;}
  args = new cljs.core.IndexedSeq(G__51013__a,0);
} 
return G__51012__delegate.call(this,args);};
G__51012.cljs$lang$maxFixedArity = 0;
G__51012.cljs$lang$applyTo = (function (arglist__51014){
var args = cljs.core.seq(arglist__51014);
return G__51012__delegate(args);
});
G__51012.cljs$core$IFn$_invoke$arity$variadic = G__51012__delegate;
return G__51012;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51015__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51016__i = 0, G__51016__a = new Array(arguments.length -  0);
while (G__51016__i < G__51016__a.length) {G__51016__a[G__51016__i] = arguments[G__51016__i + 0]; ++G__51016__i;}
  args = new cljs.core.IndexedSeq(G__51016__a,0);
} 
return G__51015__delegate.call(this,args);};
G__51015.cljs$lang$maxFixedArity = 0;
G__51015.cljs$lang$applyTo = (function (arglist__51017){
var args = cljs.core.seq(arglist__51017);
return G__51015__delegate(args);
});
G__51015.cljs$core$IFn$_invoke$arity$variadic = G__51015__delegate;
return G__51015;
})()
;

return null;
});
