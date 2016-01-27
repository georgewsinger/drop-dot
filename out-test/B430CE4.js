goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22236__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22237__i = 0, G__22237__a = new Array(arguments.length -  0);
while (G__22237__i < G__22237__a.length) {G__22237__a[G__22237__i] = arguments[G__22237__i + 0]; ++G__22237__i;}
  args = new cljs.core.IndexedSeq(G__22237__a,0);
} 
return G__22236__delegate.call(this,args);};
G__22236.cljs$lang$maxFixedArity = 0;
G__22236.cljs$lang$applyTo = (function (arglist__22238){
var args = cljs.core.seq(arglist__22238);
return G__22236__delegate(args);
});
G__22236.cljs$core$IFn$_invoke$arity$variadic = G__22236__delegate;
return G__22236;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22239__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22240__i = 0, G__22240__a = new Array(arguments.length -  0);
while (G__22240__i < G__22240__a.length) {G__22240__a[G__22240__i] = arguments[G__22240__i + 0]; ++G__22240__i;}
  args = new cljs.core.IndexedSeq(G__22240__a,0);
} 
return G__22239__delegate.call(this,args);};
G__22239.cljs$lang$maxFixedArity = 0;
G__22239.cljs$lang$applyTo = (function (arglist__22241){
var args = cljs.core.seq(arglist__22241);
return G__22239__delegate(args);
});
G__22239.cljs$core$IFn$_invoke$arity$variadic = G__22239__delegate;
return G__22239;
})()
;

return null;
});
