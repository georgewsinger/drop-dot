goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234961__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234962__i = 0, G__234962__a = new Array(arguments.length -  0);
while (G__234962__i < G__234962__a.length) {G__234962__a[G__234962__i] = arguments[G__234962__i + 0]; ++G__234962__i;}
  args = new cljs.core.IndexedSeq(G__234962__a,0);
} 
return G__234961__delegate.call(this,args);};
G__234961.cljs$lang$maxFixedArity = 0;
G__234961.cljs$lang$applyTo = (function (arglist__234963){
var args = cljs.core.seq(arglist__234963);
return G__234961__delegate(args);
});
G__234961.cljs$core$IFn$_invoke$arity$variadic = G__234961__delegate;
return G__234961;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234964__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234965__i = 0, G__234965__a = new Array(arguments.length -  0);
while (G__234965__i < G__234965__a.length) {G__234965__a[G__234965__i] = arguments[G__234965__i + 0]; ++G__234965__i;}
  args = new cljs.core.IndexedSeq(G__234965__a,0);
} 
return G__234964__delegate.call(this,args);};
G__234964.cljs$lang$maxFixedArity = 0;
G__234964.cljs$lang$applyTo = (function (arglist__234966){
var args = cljs.core.seq(arglist__234966);
return G__234964__delegate(args);
});
G__234964.cljs$core$IFn$_invoke$arity$variadic = G__234964__delegate;
return G__234964;
})()
;

return null;
});
