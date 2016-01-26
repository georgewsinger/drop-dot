goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32553__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32554__i = 0, G__32554__a = new Array(arguments.length -  0);
while (G__32554__i < G__32554__a.length) {G__32554__a[G__32554__i] = arguments[G__32554__i + 0]; ++G__32554__i;}
  args = new cljs.core.IndexedSeq(G__32554__a,0);
} 
return G__32553__delegate.call(this,args);};
G__32553.cljs$lang$maxFixedArity = 0;
G__32553.cljs$lang$applyTo = (function (arglist__32555){
var args = cljs.core.seq(arglist__32555);
return G__32553__delegate(args);
});
G__32553.cljs$core$IFn$_invoke$arity$variadic = G__32553__delegate;
return G__32553;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32556__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32557__i = 0, G__32557__a = new Array(arguments.length -  0);
while (G__32557__i < G__32557__a.length) {G__32557__a[G__32557__i] = arguments[G__32557__i + 0]; ++G__32557__i;}
  args = new cljs.core.IndexedSeq(G__32557__a,0);
} 
return G__32556__delegate.call(this,args);};
G__32556.cljs$lang$maxFixedArity = 0;
G__32556.cljs$lang$applyTo = (function (arglist__32558){
var args = cljs.core.seq(arglist__32558);
return G__32556__delegate(args);
});
G__32556.cljs$core$IFn$_invoke$arity$variadic = G__32556__delegate;
return G__32556;
})()
;

return null;
});
