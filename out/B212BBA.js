goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17051__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17052__i = 0, G__17052__a = new Array(arguments.length -  0);
while (G__17052__i < G__17052__a.length) {G__17052__a[G__17052__i] = arguments[G__17052__i + 0]; ++G__17052__i;}
  args = new cljs.core.IndexedSeq(G__17052__a,0);
} 
return G__17051__delegate.call(this,args);};
G__17051.cljs$lang$maxFixedArity = 0;
G__17051.cljs$lang$applyTo = (function (arglist__17053){
var args = cljs.core.seq(arglist__17053);
return G__17051__delegate(args);
});
G__17051.cljs$core$IFn$_invoke$arity$variadic = G__17051__delegate;
return G__17051;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17054__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17055__i = 0, G__17055__a = new Array(arguments.length -  0);
while (G__17055__i < G__17055__a.length) {G__17055__a[G__17055__i] = arguments[G__17055__i + 0]; ++G__17055__i;}
  args = new cljs.core.IndexedSeq(G__17055__a,0);
} 
return G__17054__delegate.call(this,args);};
G__17054.cljs$lang$maxFixedArity = 0;
G__17054.cljs$lang$applyTo = (function (arglist__17056){
var args = cljs.core.seq(arglist__17056);
return G__17054__delegate(args);
});
G__17054.cljs$core$IFn$_invoke$arity$variadic = G__17054__delegate;
return G__17054;
})()
;

return null;
});
