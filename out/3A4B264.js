goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__357786__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__357786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__357787__i = 0, G__357787__a = new Array(arguments.length -  0);
while (G__357787__i < G__357787__a.length) {G__357787__a[G__357787__i] = arguments[G__357787__i + 0]; ++G__357787__i;}
  args = new cljs.core.IndexedSeq(G__357787__a,0);
} 
return G__357786__delegate.call(this,args);};
G__357786.cljs$lang$maxFixedArity = 0;
G__357786.cljs$lang$applyTo = (function (arglist__357788){
var args = cljs.core.seq(arglist__357788);
return G__357786__delegate(args);
});
G__357786.cljs$core$IFn$_invoke$arity$variadic = G__357786__delegate;
return G__357786;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__357789__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__357789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__357790__i = 0, G__357790__a = new Array(arguments.length -  0);
while (G__357790__i < G__357790__a.length) {G__357790__a[G__357790__i] = arguments[G__357790__i + 0]; ++G__357790__i;}
  args = new cljs.core.IndexedSeq(G__357790__a,0);
} 
return G__357789__delegate.call(this,args);};
G__357789.cljs$lang$maxFixedArity = 0;
G__357789.cljs$lang$applyTo = (function (arglist__357791){
var args = cljs.core.seq(arglist__357791);
return G__357789__delegate(args);
});
G__357789.cljs$core$IFn$_invoke$arity$variadic = G__357789__delegate;
return G__357789;
})()
;

return null;
});
