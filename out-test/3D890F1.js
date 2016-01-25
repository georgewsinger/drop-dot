goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39122__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39123__i = 0, G__39123__a = new Array(arguments.length -  0);
while (G__39123__i < G__39123__a.length) {G__39123__a[G__39123__i] = arguments[G__39123__i + 0]; ++G__39123__i;}
  args = new cljs.core.IndexedSeq(G__39123__a,0);
} 
return G__39122__delegate.call(this,args);};
G__39122.cljs$lang$maxFixedArity = 0;
G__39122.cljs$lang$applyTo = (function (arglist__39124){
var args = cljs.core.seq(arglist__39124);
return G__39122__delegate(args);
});
G__39122.cljs$core$IFn$_invoke$arity$variadic = G__39122__delegate;
return G__39122;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39125__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39126__i = 0, G__39126__a = new Array(arguments.length -  0);
while (G__39126__i < G__39126__a.length) {G__39126__a[G__39126__i] = arguments[G__39126__i + 0]; ++G__39126__i;}
  args = new cljs.core.IndexedSeq(G__39126__a,0);
} 
return G__39125__delegate.call(this,args);};
G__39125.cljs$lang$maxFixedArity = 0;
G__39125.cljs$lang$applyTo = (function (arglist__39127){
var args = cljs.core.seq(arglist__39127);
return G__39125__delegate(args);
});
G__39125.cljs$core$IFn$_invoke$arity$variadic = G__39125__delegate;
return G__39125;
})()
;

return null;
});
